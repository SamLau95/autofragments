def _jupyter_nbextension_paths():
    return [
        {
            "section": "notebook",
            "src": "static",
            "dest": "autofragments",
            "require": "autofragments/main",
        }
    ]
