$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(120, 600, 200, 30, "Navy");
    createPlatform(400, 709, 300, 20, "Purple");
    createPlatform(481, 500, 200, 20, "Navy");
    createPlatform(600, 509, 200, 20, "Purple");
    createPlatform(500, 400, 200, 30, "Navy");
    createPlatform(730, 300, 200, 29, "Purple");
    createPlatform(600, 300, 20, 200, "Navy");
    createPlatform(900, 270, 40, 10, "Purple");
    createPlatform(580, 140, 200, 20, "Navy");
    createPlatform(300, 200, 200, 20, "Purple");
    createPlatform(1000, 400, 99, 20, "Navy");
    createPlatform(1100, 600, 99, 20, "Purple");
    createPlatform(1000, 500, 20, 290, "Navy");
    createPlatform(300, 500, 20, 290, "Purple");
    createPlatform(0, 650, 90, 20, "Navy");
    createPlatform(700, 486, 90, 20, "Purple")
    createPlatform(900, 460, 90, 20, "Navy")
    



    // TODO 3 - Create Collectables
    createCollectable("diamond", 300, 170, 0.5, 0.7);
    createCollectable("max", 1000, 300);
    createCollectable("kennedi", 1120, 570);
    createCollectable("database", 1150, 570);
    createCollectable("steve", 709, 460)


    
    // TODO 4 - Create Cannons
    createCannon("top", 600, 1000);
    createCannon("right", 760, 20);
    createCannon("right", 730,20 );


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
