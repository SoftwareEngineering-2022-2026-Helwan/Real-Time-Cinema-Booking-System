import { Component, OnDestroy, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn} from '@angular/forms'
import { CinemaService } from 'src/app/services/cinema/cinema.service';
@Component({
  selector: 'app-cinema-form',
  templateUrl: './cinema-form.component.html',
  styleUrls: ['./cinema-form.component.css']
})
export class CinemaFormComponent implements OnInit,OnDestroy {

  imgTag:any;
  constructor(private cinemaSrv:CinemaService) {
    this.imgTag = document.createElement("img");
    let image = "../../../../assets/imgs/mapMarker.svg";
    this.imgTag.src = image;
    this.imgTag.style.width = "30px";
  }

  handleMapClick($event: google.maps.MapMouseEvent|google.maps.IconMouseEvent) {
    console.log($event.latLng?.toJSON());
    this.cinemaForm.get("location")?.setValue($event.latLng?.toJSON());
    this.markers.lat = $event.latLng?.toJSON().lat;
    this.markers.lng = $event.latLng?.toJSON().lng;
  }

  cinemaForm : FormGroup = new FormGroup({
    name : new FormControl(null,[Validators.required]),
    city : new FormControl(null,[Validators.required]),
    halls : new FormControl(null,[Validators.required]),
    location : new FormControl(null,[Validators.required])
  })

  showLoader : boolean = false;
  showResetLoader : boolean = false;

  timer : any;

  ResetTimer : any;

  displayLoader(){
    this.showLoader = true;
    this.timer = setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }

  displayResetLoader(){
    this.showResetLoader = true;
    this.ResetTimer = setTimeout(() => {
      this.showResetLoader = false;
    }, 1000);
  }

  submitCinemaForm(form : FormGroup){
    console.log(form.value);
    let  data = {
        Location: form.value.location,
        name: form.value.name
    }
    this.cinemaSrv.createCineam(data).subscribe((res:any) => {
        console.log("res: ",res);
    })
  }

  ngOnInit() {
    const parser = new DOMParser();
    const svgString = `<svg fill="#E2EBEF" stroke="#04141B" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 width="30px" height="30px" viewBox="0 0 59.483 59.482"
	 xml:space="preserve">
<g>
	<g>
		<path d="M13.077,40.049c7.223,0,13.077-5.854,13.077-13.076s-5.854-13.077-13.077-13.077C5.855,13.896,0,19.751,0,26.973
			S5.855,40.049,13.077,40.049z M6.854,37.206c-0.247,0-0.45-0.202-0.45-0.45c0-0.249,0.202-0.449,0.45-0.449
			c0.249,0,0.451,0.2,0.451,0.449C7.305,37.004,7.104,37.206,6.854,37.206z M4.538,31.584l6.814-2.759l0.156,7.946
			C8.439,36.262,5.868,34.284,4.538,31.584z M12.785,28.617c-1.004,0-1.814-0.813-1.814-1.815c0-1.003,0.81-1.815,1.814-1.815
			c1.002,0,1.815,0.812,1.815,1.815C14.6,27.804,13.787,28.617,12.785,28.617z M19.614,36.307c-0.248,0-0.449-0.202-0.449-0.451
			s0.2-0.449,0.449-0.449c0.25,0,0.451,0.2,0.451,0.449S19.865,36.307,19.614,36.307z M14.729,36.756l-0.16-8.168l7.106,2.878
			C20.375,34.203,17.806,36.217,14.729,36.756z M23.374,23.407c0.248,0,0.449,0.201,0.449,0.45c0,0.249-0.2,0.451-0.449,0.451
			c-0.249,0-0.451-0.202-0.451-0.451C22.923,23.608,23.124,23.407,23.374,23.407z M22.593,27.387c0,0.323-0.018,0.642-0.048,0.957
			l-7.347-2.975l4.191-5.1C21.353,22.012,22.593,24.554,22.593,27.387z M12.502,15.398c0.248,0,0.449,0.201,0.449,0.45
			s-0.201,0.45-0.449,0.45c-0.248,0-0.45-0.202-0.45-0.45C12.052,15.6,12.255,15.398,12.502,15.398z M13.077,17.872
			c1.255,0,2.451,0.246,3.547,0.687l-4.149,5.052l-4.095-4.496C9.767,18.326,11.368,17.872,13.077,17.872z M2.05,24.757
			c-0.248,0-0.45-0.201-0.45-0.451c0-0.248,0.201-0.45,0.45-0.45s0.45,0.202,0.45,0.45C2.5,24.555,2.299,24.757,2.05,24.757z
			 M3.562,27.387c0-2.382,0.878-4.557,2.324-6.228l4.26,4.678l-6.52,2.642C3.585,28.121,3.562,27.756,3.562,27.387z"/>
		<path d="M59.483,18.33c0-7.841-6.355-14.199-14.198-14.199c-7.84,0-14.198,6.358-14.198,14.199c0,6.745,4.709,12.38,11.012,13.826
			l-0.862,2.842h-3.432v-2.754c0-0.396-0.322-0.719-0.719-0.719H26.908c-0.397,0-0.718,0.322-0.718,0.719v2.754h-1.37
			c-1.434,2.047-3.399,3.697-5.694,4.745v0.489l4.694-2.44h12.705v16.843h-4.229v-1.409l-13.17-4.694c0,0,0,1.526,0,3.41
			c0,1.883,1.866,3.41,4.167,3.41h19.443c2.301,0,4.167-1.865,4.167-4.167V34.998h-1.619v-2.47
			C53.127,32.528,59.483,26.171,59.483,18.33z M36.367,34.998h-8.739v-2.036h8.741v2.036H36.367z M52.384,28.464
			c-0.271,0-0.488-0.22-0.488-0.489c0-0.271,0.218-0.489,0.488-0.489s0.488,0.219,0.488,0.489
			C52.873,28.245,52.655,28.464,52.384,28.464z M47.079,28.953l-0.175-8.869l7.716,3.125C53.208,26.18,50.419,28.367,47.079,28.953z
			 M56.463,14.457c0.272,0,0.489,0.219,0.489,0.489c0,0.27-0.217,0.488-0.489,0.488c-0.271,0-0.488-0.219-0.488-0.488
			C55.975,14.676,56.193,14.457,56.463,14.457z M55.617,18.78c0,0.35-0.02,0.697-0.052,1.04l-7.978-3.23l4.55-5.537
			C54.271,12.944,55.617,15.704,55.617,18.78z M44.662,5.762c0.269,0,0.488,0.219,0.488,0.488c0,0.27-0.22,0.489-0.488,0.489
			c-0.271,0-0.488-0.219-0.488-0.489C44.173,5.98,44.393,5.762,44.662,5.762z M45.285,8.448c1.362,0,2.665,0.267,3.853,0.747
			l-4.505,5.485l-4.448-4.882C41.691,8.94,43.431,8.448,45.285,8.448z M33.313,15.923c-0.271,0-0.489-0.219-0.489-0.489
			c0-0.27,0.219-0.488,0.489-0.488s0.488,0.219,0.488,0.488C33.801,15.705,33.583,15.923,33.313,15.923z M34.954,18.78
			c0-2.587,0.953-4.949,2.526-6.762l4.623,5.079l-7.079,2.868C34.979,19.577,34.954,19.181,34.954,18.78z M38.528,29.44
			c-0.27,0-0.488-0.219-0.488-0.488c0-0.27,0.219-0.488,0.488-0.488c0.271,0,0.488,0.219,0.488,0.488
			C39.016,29.222,38.798,29.44,38.528,29.44z M36.013,23.337l7.398-2.996l0.171,8.627C40.249,28.416,37.458,26.269,36.013,23.337z
			 M44.966,20.115c-1.088,0-1.971-0.882-1.971-1.971c0-1.089,0.883-1.97,1.971-1.97c1.089,0,1.972,0.881,1.972,1.97
			C46.938,19.232,46.055,20.115,44.966,20.115z"/>
		<polygon points="35.808,53.836 35.808,38.431 23.995,38.431 18.007,41.543 18.007,47.291 33.016,52.64 33.016,53.836 		"/>
	</g>
</g>
</svg>`;
    this.markers.content = parser.parseFromString(svgString, "image/svg+xml").documentElement;
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  zoom = 5;
  center: any = {
    lat: 30.0055,
    lng: 31.2300
  };
  markers:any = {lat:30.0444, lng: 31.2357};

  options: any = {
    mapId: "DEMO_MAP_ID",
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };

}
