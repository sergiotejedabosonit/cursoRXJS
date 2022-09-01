import { fromEvent, map, tap } from 'rxjs';



const texto = document.createElement('div')
texto.innerHTML = `
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla porttitor consequat. Morbi maximus nisl nunc, sit amet rutrum lorem tempor sit amet. Suspendisse potenti. Sed mattis blandit massa, et egestas nibh convallis ac. Nam at elit dapibus, faucibus velit non, tempus enim. Donec id nisi at massa iaculis luctus. Donec in nibh lacus.
<br/><br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ornare fermentum lorem, at efficitur neque consectetur eget. Maecenas placerat eget lorem quis varius. Morbi a accumsan libero, ac vehicula ante. Cras lacinia vulputate nunc. Duis convallis enim ut magna pharetra, eget elementum justo pretium. Pellentesque pharetra sed sapien semper tempor. Pellentesque sed neque sit amet libero rutrum sollicitudin. Suspendisse potenti. Donec tempus laoreet varius. Vestibulum congue cursus odio, sed tincidunt ex. Vivamus non nunc gravida, ultrices odio non, maximus metus.
<br/><br/>
Ut imperdiet tortor ut dictum molestie. Aenean porta urna et sollicitudin dictum. Sed vestibulum metus molestie efficitur tempor. Suspendisse in iaculis felis, id iaculis dolor. Praesent commodo nibh neque, feugiat elementum elit tincidunt eu. Integer ipsum nulla, fringilla ut elit eget, vestibulum molestie ex. Vestibulum a turpis a turpis pharetra varius vel in nisi. Vestibulum commodo vitae lectus eu laoreet. Fusce dapibus ante nibh, a tincidunt ipsum facilisis a. Sed id urna eu mauris imperdiet condimentum. Sed sagittis risus at dui pellentesque, nec placerat turpis aliquam. Sed sed ullamcorper odio, sed aliquet felis. Maecenas quis est efficitur, faucibus elit ut, ornare tellus.
<br/><br/>
Vestibulum at turpis elementum, porta elit at, dictum sem. Donec consequat ligula diam, eleifend porta eros placerat fringilla. Nullam vel condimentum purus. Nunc et dolor vestibulum, tempus orci in, consectetur sapien. Donec dictum arcu quis ex blandit vulputate. Integer eleifend mauris posuere ligula viverra, a efficitur nibh luctus. Nullam rhoncus eu velit sed elementum. Pellentesque fringilla massa aliquam tortor tincidunt, sed fringilla justo imperdiet.
<br/><br/>
Vestibulum dictum posuere justo sed viverra. Etiam eu orci ante. Nulla et nisl non massa mollis lacinia ut vel justo. Integer tempor risus sed sodales tincidunt. Morbi dictum quam sit amet nisl commodo, id iaculis magna molestie. Maecenas dignissim accumsan ante eu ultricies. Pellentesque vel urna nulla. Sed ac ornare orci, et accumsan ipsum.
<br/><br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ornare fermentum lorem, at efficitur neque consectetur eget. Maecenas placerat eget lorem quis varius. Morbi a accumsan libero, ac vehicula ante. Cras lacinia vulputate nunc. Duis convallis enim ut magna pharetra, eget elementum justo pretium. Pellentesque pharetra sed sapien semper tempor. Pellentesque sed neque sit amet libero rutrum sollicitudin. Suspendisse potenti. Donec tempus laoreet varius. Vestibulum congue cursus odio, sed tincidunt ex. Vivamus non nunc gravida, ultrices odio non, maximus metus.
<br/><br/>
Ut imperdiet tortor ut dictum molestie. Aenean porta urna et sollicitudin dictum. Sed vestibulum metus molestie efficitur tempor. Suspendisse in iaculis felis, id iaculis dolor. Praesent commodo nibh neque, feugiat elementum elit tincidunt eu. Integer ipsum nulla, fringilla ut elit eget, vestibulum molestie ex. Vestibulum a turpis a turpis pharetra varius vel in nisi. Vestibulum commodo vitae lectus eu laoreet. Fusce dapibus ante nibh, a tincidunt ipsum facilisis a. Sed id urna eu mauris imperdiet condimentum. Sed sagittis risus at dui pellentesque, nec placerat turpis aliquam. Sed sed ullamcorper odio, sed aliquet felis. Maecenas quis est efficitur, faucibus elit ut, ornare tellus.
<br/><br/>
Vestibulum at turpis elementum, porta elit at, dictum sem. Donec consequat ligula diam, eleifend porta eros placerat fringilla. Nullam vel condimentum purus. Nunc et dolor vestibulum, tempus orci in, consectetur sapien. Donec dictum arcu quis ex blandit vulputate. Integer eleifend mauris posuere ligula viverra, a efficitur nibh luctus. Nullam rhoncus eu velit sed elementum. Pellentesque fringilla massa aliquam tortor tincidunt, sed fringilla justo imperdiet.
<br/><br/>
Vestibulum dictum posuere justo sed viverra. Etiam eu orci ante. Nulla et nisl non massa mollis lacinia ut vel justo. Integer tempor risus sed sodales tincidunt. Morbi dictum quam sit amet nisl commodo, id iaculis magna molestie. Maecenas dignissim accumsan ante eu ultricies. Pellentesque vel urna nulla. Sed ac ornare orci, et accumsan ipsum.
<br/><br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ornare fermentum lorem, at efficitur neque consectetur eget. Maecenas placerat eget lorem quis varius. Morbi a accumsan libero, ac vehicula ante. Cras lacinia vulputate nunc. Duis convallis enim ut magna pharetra, eget elementum justo pretium. Pellentesque pharetra sed sapien semper tempor. Pellentesque sed neque sit amet libero rutrum sollicitudin. Suspendisse potenti. Donec tempus laoreet varius. Vestibulum congue cursus odio, sed tincidunt ex. Vivamus non nunc gravida, ultrices odio non, maximus metus.
<br/><br/>
Ut imperdiet tortor ut dictum molestie. Aenean porta urna et sollicitudin dictum. Sed vestibulum metus molestie efficitur tempor. Suspendisse in iaculis felis, id iaculis dolor. Praesent commodo nibh neque, feugiat elementum elit tincidunt eu. Integer ipsum nulla, fringilla ut elit eget, vestibulum molestie ex. Vestibulum a turpis a turpis pharetra varius vel in nisi. Vestibulum commodo vitae lectus eu laoreet. Fusce dapibus ante nibh, a tincidunt ipsum facilisis a. Sed id urna eu mauris imperdiet condimentum. Sed sagittis risus at dui pellentesque, nec placerat turpis aliquam. Sed sed ullamcorper odio, sed aliquet felis. Maecenas quis est efficitur, faucibus elit ut, ornare tellus.
<br/><br/>
Vestibulum at turpis elementum, porta elit at, dictum sem. Donec consequat ligula diam, eleifend porta eros placerat fringilla. Nullam vel condimentum purus. Nunc et dolor vestibulum, tempus orci in, consectetur sapien. Donec dictum arcu quis ex blandit vulputate. Integer eleifend mauris posuere ligula viverra, a efficitur nibh luctus. Nullam rhoncus eu velit sed elementum. Pellentesque fringilla massa aliquam tortor tincidunt, sed fringilla justo imperdiet.
<br/><br/>
Vestibulum dictum posuere justo sed viverra. Etiam eu orci ante. Nulla et nisl non massa mollis lacinia ut vel justo. Integer tempor risus sed sodales tincidunt. Morbi dictum quam sit amet nisl commodo, id iaculis magna molestie. Maecenas dignissim accumsan ante eu ultricies. Pellentesque vel urna nulla. Sed ac ornare orci, et accumsan ipsum.
 `

const body = document.querySelector('body')

body.append(texto)

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// funcion que me haga el calculo
const calcularPorcentajeScroll = (event: any) => {
    const {
        scrollTop, scrollHeight, clientHeight
    } = event.target.documentElement;

    console.log( scrollTop / ( scrollHeight - clientHeight) * 100);
    
    return ( scrollTop / ( scrollHeight - clientHeight) * 100)
}

// Stream: suscribirme el scroll
const scroll$ = fromEvent(document, 'scroll')

scroll$.subscribe(console.log)

 scroll$.pipe(
    map(event => {
        calcularPorcentajeScroll(event)
    }) 
).subscribe( porcentaje => {

    progressBar.style['width'] = `${ porcentaje }%`;

});