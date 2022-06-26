import setuptools
from glob import glob

setuptools.setup(
    name="autofragments",
    version="0.0.1",
    url="https://github.com/yuvipanda/nbtimetravel",
    author="sam lau",
    description="auto adds class=fragment to markdown elements",
    data_files=[("share/jupyter/nbextensions/autofragments", glob("*.js"))],
    packages=setuptools.find_packages(),
    package_data={"autofragments": ["static/*"]},
)
