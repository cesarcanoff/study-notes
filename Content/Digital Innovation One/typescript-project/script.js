"use strict";
(() => {
    var _a;
    const $ = (query) => document.querySelector(query);
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa)
            alert('Os campos NOME e PLACA são obrigatórios!');
    });
})();
