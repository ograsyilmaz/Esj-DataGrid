

## Esj Grid

Proje lokal ortamınıza kurulduktan sonra aşağıdaki adımları takip edebilirsiniz.

1. Proje klasörünü oluşturun:

    ```bash
    npx create-next-app@latest
    ```

2. Syncfusion Grids eklentisini projeye ekleyin:

    ```bash
    yarn add @syncfusion/ej2-react-grids
    ```

3. `src/app/globals.css` dosyasına aşağıdaki stil import'lerini ekleyin:

    ```css
    @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
    @import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
    @import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
    @import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
    @import "../../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
    ```

4. Button bileşenini ekleyin:

    ```bash
    yarn add @syncfusion/ej2-react-buttons
    ```

    Stil import'ini `src/app/globals.css` dosyasına ekleyin:

    ```css
    @import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    ```

5. Input bileşenini ekleyin:

    ```bash
    yarn add @syncfusion/ej2-react-inputs
    ```

    Stil import'ini `src/app/globals.css` dosyasına ekleyin:

    ```css
    @import "../../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
    ```

6. Projeyi başlatın:

    ```bash
    yarn dev
    ```


 Site Adres Linki [https://esj-data-grid.vercel.app/](https://esj-data-grid.vercel.app/)