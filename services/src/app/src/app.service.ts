import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class AppService {
  private dbname = 'myevents';
  private couchUrl;

  constructor (private http: HttpService){
    this.couchUrl = `http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@${process.env.COUCHDB_HOST}:${process.env.COUCHDB_PORT}`;
    console.log("Using couch ", this.couchUrl)
  }

  createItem(body){
    console.log("post");
    return this.http.post(`${this.couchUrl}/${this.dbname}`, body)
        .pipe(map((res) => { return res.data;}))
  }

  getItem(id) {
    console.log("get " + id);
    return this.http.get(`${this.couchUrl}/${this.dbname}/${id}`)
        .pipe(map((res) => { return res.data;}))
  }

  getAll() {
    console.log("get all");
    return this.http.get(`${this.couchUrl}/${this.dbname}/_all_docs?include_docs=true`)
        .pipe(map((res) => {
            return res.data.rows.map(item => { return item.doc })
        }), catchError(e => {
            if (e.code == "ECONNREFUSED") {
              console.log("ECONNREFUSED");
              throw new HttpException(e.code, 500);
            }
            if (e.response.data.error == 'not_found'){
              return this.http.put(`${this.couchUrl}/${this.dbname}`)
              .pipe(map((res2) => {
                console.log('created database');
                return [];
              }));
            }
            throw new HttpException(e.response.data, e.response.status);
        }));
  }

  updateItem(id, body){
    console.log("update " + id);
    body._id = id;
    body._rev= body.rev;
    delete body.id;
    delete body.rev;
    return this.http.put(`${this.couchUrl}/${this.dbname}/${id}`, body)
        .pipe(map((res2) => { return res2.data;}));
  }

  deleteItem(id, rev){
    console.log("delete " + id)
    console.log(`id: ${id} - rev: ${rev}`);
    return this.http.delete(`${this.couchUrl}/${this.dbname}/${id}?rev=${rev}`)
        .pipe(map((res2) => { console.log(res2.data); return res2.data;}));
  }
}
