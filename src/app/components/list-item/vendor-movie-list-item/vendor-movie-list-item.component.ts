import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-vendor-movie-list-item',
  templateUrl: './vendor-movie-list-item.component.html',
  styleUrls: ['./vendor-movie-list-item.component.css']
})
export class VendorMovieListItemComponent implements OnInit {

  constructor() { }
  @Input() editList: any[] = [];
  @Input() showtime: any[] = [];
  closeMark: HTMLElement | null = document.getElementById('closeMark') as HTMLElement | null;
  showTimeTouched: boolean = false;
  hallTouched: boolean = false;
  released: boolean = true;

  isValidInput(input: string): boolean {
    return typeof input === 'string' && input.trim().length > 0;
  }

  edit(name: string) {
    console.log("Edit : ",name);
  }
 openEditModal(title: string) {
   const modal = document.getElementById('editModal');
   modal?.classList.add('show');
   if (modal && modal.style) {
     modal.style.display = 'block';
   }
   console.log(`Editing show time for ${title}`);
 }
 closeEditModal() {
   const modal = document.getElementById('editModal');
   modal?.classList.remove('show');
   if (modal && modal.style) {
     modal.style.display = 'none';
   }
   console.log('Closed edit modal');
   
  
 }
  addshowTime(showTime: string, hall: string): void {
    this.showTimeTouched = true;
    this.hallTouched = true;
    
    if (this.isValidInput(showTime) && this.isValidInput(hall)) {
      console.log(`Show time added for movie: ${showTime}`);
      console.log(`Hall added: ${hall}`);
      console.log(`Released: ${this.released ? 'Yes' : 'No'}`);
    } else {
      console.error('Invalid input! Please enter a valid show time and hall.');
    }
  }
  toggleReleased(): void {
    this.released = !this.released;
    console.log(`Released state: ${this.released ? 'Yes' : 'No'}`);
  }


  removeMovie() {
   const movieToRemove = (document.getElementById("showTimeInput") as HTMLInputElement).value;
   console.log(`Removed movie: ${movieToRemove}`);
 }

  hideModal() {
   const modal = document.getElementById('editModal');
   modal?.classList.remove('show');
   modal!.style.display = 'none';
   console.log('Closed edit modal');}
 
 if (closeMark: { addEventListener: (arg0: string, arg1: (event: MouseEvent) => void) => void; }) {
  closeMark.addEventListener('click', (event: MouseEvent) => {
    this.hideModal();
  });
}

  ngOnInit() {
  }


}
