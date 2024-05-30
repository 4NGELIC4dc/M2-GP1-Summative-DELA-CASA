export class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    preload() {
        // Load assets
        this.load.image("menu_background", "assets/png/menu_background.png");
        this.load.image("txt_title", "assets/png/txt_title.png");
        this.load.image("btn_play", "assets/png/btn_play.png");
        this.load.image("btn_levels", "assets/png/btn_levels.png");
        this.load.image("btn_quit", "assets/png/btn_quit.png");
        this.load.audio("clickSfx", "assets/mp3/click_sfx.mp3");
    }

    create() {
        // Background
        this.add.image(0, 0, "menu_background").setOrigin(0, 0).setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Title
        const title = this.add.image(this.cameras.main.centerX, 100, "txt_title").setOrigin(0.5, -1.25);
        title.setInteractive({ useHandCursor: true });
        title.setScale(0.30);

        // SFX
        this.clickSfx = this.sound.add("clickSfx", { volume: 0.25 });

        // Play Button
        const playButton = this.add.image(this.cameras.main.centerX, 200, "btn_play").setOrigin(0.5, 0.85);
        playButton.setInteractive();
        playButton.on("pointerover", () => playButton.setTint(0x808080));
        playButton.on("pointerout", () => playButton.clearTint());
        playButton.on("pointerup", () => {
            this.clickSfx.play();
            this.scene.start("GameScene1");
        });

        // Levels Button
        const levelsButton = this.add.image(this.cameras.main.centerX, 300, "btn_levels").setOrigin(1.65, 3.25);
        levelsButton.setInteractive();
        levelsButton.on("pointerover", () => levelsButton.setTint(0x808080));
        levelsButton.on("pointerout", () => levelsButton.clearTint());
        levelsButton.on("pointerup", () => {
            this.clickSfx.play();
            this.scene.start("LevelMenu");
        });

        // Quit Button
        const quitButton = this.add.image(this.cameras.main.centerX, 400, "btn_quit").setOrigin(-0.65, 5.70);
        quitButton.setInteractive();
        quitButton.on("pointerover", () => quitButton.setTint(0x808080));
        quitButton.on("pointerout", () => quitButton.clearTint());
        quitButton.on("pointerup", () => {
            this.clickSfx.play();
            alert("You have exited the game. Thank you for playing Dungeon Adventure.");
        });

        playButton.setScale(0.10);
        levelsButton.setScale(0.10);
        quitButton.setScale(0.10);
    }
}
