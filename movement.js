
// Move focused window to left or right half
var leftHalf = new Key('left', MOD, () => {
  Window.focused().setFrame(windowLocations(Screen.main()).left);
});

var rightHalf = new Key('right', MOD, () => {
  Window.focused().setFrame(windowLocations(Screen.main()).right);
});

// Move focused window to left or right half of next display
var leftHalfND = new Key('left', MOD_S, () => {
  Window.focused().setFrame(windowLocations(Screen.main().next()).left);
});

var rightHalfND = new Key('right', MOD_S, () => {
  Window.focused().setFrame(windowLocations(Screen.main().next()).right);
});

// Move focused window to bottom or top half
var moveUp = new Key('up', MOD, () => {
  const windowX = Math.round(Window.focused().topLeft().x);
  const leftX = Math.round(windowLocations(Screen.main()).left.x);
  const rightX = Math.round(windowLocations(Screen.main()).right.x);
  if (leftX >= windowX) {
    Window.focused().setFrame(windowLocations(Screen.main()).topLeft);
  } else if (rightX >= windowX) {
    Window.focused().setFrame(windowLocations(Screen.main()).topRight);
  }
});

var moveDown = new Key('down', MOD, () => {
  const windowX = Math.round(Window.focused().topLeft().x);
  const leftX = Math.round(windowLocations(Screen.main()).left.x);
  const rightX = Math.round(windowLocations(Screen.main()).right.x);
  if (leftX >= windowX) {
    Window.focused().setFrame(windowLocations(Screen.main()).bottomLeft);
  } else if (rightX >= windowX) {
    Window.focused().setFrame(windowLocations(Screen.main()).bottomRight);
  }
});

// Move focused window to corners
var topRight = new Key(']', MOD, () => {
  Window.focused().setFrame(windowLocations(Screen.main()).topRight);
});

var topLeft = new Key('[', MOD, () => {
  Window.focused().setFrame(windowLocations(Screen.main()).topLeft);
});

var bottomRight = new Key('\'', MOD, () => {
  Window.focused().setFrame(windowLocations(Screen.main()).bottomRight);
});

var bottomLeft = new Key(';', MOD, () => {
  if ( VERBOSE ) { movementModal( 'bottom left of next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main()).bottomLeft);
});

// Maximize window (not fullscreen)
var maximizeWindow = new Key('return', MOD, () => {
  Window.focused().setFrame(windowLocations(Screen.main()).full);//.maximize();
});

// Maximize window (not fullscreen) on next display
var maximizeWindowND = new Key('return', MOD_S, () => {
  Window.focused().setFrame(windowLocations(Screen.main().next()).full);//.maximize();
});

let fullscreenWindow = new Key('f', MOD, () => {
  let w = Window.focused();
  if ( w.isFullScreen() ) {
    Window.focused().setFullScreen(false);
  } else {
    Window.focused().setFullScreen(true);
  }
});
