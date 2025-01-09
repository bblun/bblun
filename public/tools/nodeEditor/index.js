// deno-lint-ignore-file prefer-const
/* global BABYLON */
let nodeMaterial;

if (window.location.search.indexOf("webgpu") !== -1) {
    localStorage.setItem("Engine", 1);
}
const useWebGPU = localStorage.getItem("Engine") === "1";
let customLoadObservable = new BABYLON.Observable();

let startAsync = async function () {
    // Let's start
    if (BABYLON.Engine.isSupported()) {
        let canvas = document.createElement("canvas");
        let engine;

        if (useWebGPU) {
            engine = new BABYLON.WebGPUEngine(canvas);
            await engine.initAsync();
        } else {
            engine = new BABYLON.Engine(canvas, false, { disableWebGL2Support: false });
        }

        let scene = new BABYLON.Scene(engine);
        new BABYLON.HemisphericLight("light #0", new BABYLON.Vector3(0, 1, 0), scene);
        new BABYLON.HemisphericLight("light #1", new BABYLON.Vector3(0, 1, 0), scene);
        new BABYLON.HemisphericLight("light #2", new BABYLON.Vector3(0, 1, 0), scene);

        nodeMaterial = new BABYLON.NodeMaterial("node", scene, {
            shaderLanguage: useWebGPU ? BABYLON.ShaderLanguage.WGSL : BABYLON.ShaderLanguage.GLSL,
        });

        // Set to default

        const mode = BABYLON.DataStorage.ReadNumber("Mode", BABYLON.NodeMaterialModes.Material);

        switch (mode) {
            case BABYLON.NodeMaterialModes.Material:
                nodeMaterial.setToDefault();
                break;
            case BABYLON.NodeMaterialModes.PostProcess:
                nodeMaterial.setToDefaultPostProcess();
                break;
            case BABYLON.NodeMaterialModes.Particle:
                nodeMaterial.setToDefaultParticle();
                break;
            case BABYLON.NodeMaterialModes.ProceduralTexture:
                nodeMaterial.setToDefaultProceduralTexture();
                break;
        }
        nodeMaterial.build(true);
        showEditor();
    } else {
        alert("Babylon.js is not supported.");
    }
};

let showEditor = function () {
    editorDisplayed = true;
    let hostElement = document.getElementById("host-element");

    BABYLON.NodeEditor.Show({
        nodeMaterial: nodeMaterial,
        hostElement: hostElement,
        customLoadObservable: customLoadObservable,
    });
};
startAsync();