# autofragments

adds class="fragment" to markdown cells for reveal.js

## Installation

Install this module with pip from git first

```bash
pip install git+https://github.com/SamLau95/autofragments
```

Then you can install & enable the extension

```
jupyter nbextension install --sys-prefix --py autofragments
jupyter nbextension enable --sys-prefix --py autofragments
```

This installs it for the current virtual environment. You can use `--system` to install it systemwide (needs `root`) too.
