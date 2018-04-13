import { Component, ViewChild, OnInit, ViewEncapsulation } from "@angular/core";
import { PageTitleService } from "../../core/page-title/page-title.service";
import { fadeInAnimation } from "../../core/route-animation/route.animation";
import { ClientDataService } from "../../services/client-data.service";

@Component({
  selector: "ms-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[@fadeInAnimation]": "true"
  },
  animations: [fadeInAnimation]
})
export class ClientListComponent implements OnInit {
  rows = [];
  selected = [];

  constructor(
    private pageTitleService: PageTitleService,
    private clientDataService: ClientDataService
  ) {}

  ngOnInit() {
    this.pageTitleService.setTitle("Clients Management");
    this.clientDataService.getAllClients().subscribe(clients => {
      this.rows = clients;
    });
  }

  onSelect({ selected }) {
    const cloned = [...selected]
    this.selected.splice(0, this.selected.length);
    this.selected.push(...cloned);
  }

  onActivate(event) {
    console.log("Activate Event", event);
  }
}
