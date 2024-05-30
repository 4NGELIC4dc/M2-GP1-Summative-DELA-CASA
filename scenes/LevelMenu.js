export class LevelMenu extends Phaser.Scene {
    constructor() {
        super("LevelMenu");
    }

    preload() {
        // Load assets
        this.load.image("menu_background", "assets/png/menu_background.png");
        this.load.image("txt_level", "assets/png/txt_level.png");
        this.load.image("btn_lvl1", "assets/png/btn_lvl1.png");
        this.load.image("btn_lvl2", "assets/png/btn_lvl2.png");
        this.load.image("btn_lvl3", "assets/png/btn_lvl3.png");
        this.load.image("btn_menu", "assets/png/btn_menu.png");
        this.load.audio("clickSfx", "assets/mp3/click_sfx.mp3");
    }

    create() {
        // Background
        this.add.image(0, 0, "menu_background").setOrigin(0, 0).setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Title
        const title = this.add.image(this.cameras.main.centerX, 100, "txt_level").setOrigin(0.5, -1.25);
        title.setInteractive({ useHandCursor: true });
        title.setScale(0.40);

        // SFX
        this.clickSfx = this.sound.add("clickSfx", { volume: 0.25 });

        // Level 1 Button
        const lvl1Button = this.add.image(this.cameras.main.centerX, 150, "btn_lvl1").setOrigin(1.65, -0.35);
        lvl1Button.setInteractive();
        lvl1Button.on("pointerover", () => lvl1Button.setTint(0x808080));
        lvl1Button.on("pointerout", () => lvl1Button.clearTint());
        lvl1Button.on("pointerup", () => {
            this.clickSfx.play();
            this.scene.start("GameScene1");
        });

        // Level 2 Button
        const lvl2Button = this.add.image(this.cameras.main.centerX, 250, "btn_lvl2").setOrigin(0.5, 2.05);
        lvl2Button.setInteractive();
        lvl2Button.on("pointerover", () => lvl2Button.setTint(0x808080));
        lvl2Button.on("pointerout", () => lvl2Button.clearTint());
        lvl2Button.on("pointerup", () => {
            this.clickSfx.play();
            this.scene.start("GameScene2");
        });

        // Level 3 Button
        const lvl3Button = this.add.image(this.cameras.main.centerX, 350, "btn_lvl3").setOrigin(-0.65, 4.5);
        lvl3Button.setInteractive();
        lvl3Button.on("pointerover", () => lvl3Button.setTint(0x808080));
        lvl3Button.on("pointerout", () => lvl3Button.clearTint());
        lvl3Button.on("pointerup", () => {
            this.clickSfx.play();
            this.scene.start("GameScene3");
        });

        // Main Menu Button
        const menuButton = this.add.image(this.cameras.main.centerX, 450, "btn_menu").setOrigin(0.5, 4.5);
        menuButton.setInteractive();
        menuButton.on("pointerover", () => menuButton.setTint(0x808080));
        menuButton.on("pointerout", () => menuButton.clearTint());
        menuButton.on("pointerup", () => {
            this.clickSfx.play();
            this.scene.start("MainMenu");
        });

        lvl1Button.setScale(0.10);
        lvl2Button.setScale(0.10);
        lvl3Button.setScale(0.10);
        menuButton.setScale(0.10);
    }
}
