import { HttpClient } from '@angular/common/http';
import { Group } from './../group.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupDetailService } from './group-detail.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  // group: Group;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private groupDetailService: GroupDetailService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    if(id){
      this.http.get('http://localhost:5000/api/getOneGroupById/' + id).subscribe((res: any) => {
          console.log(res);
          this.groupDetailService.setGroup(res);
          // this.group = res;        
      });
    }
  }

}
