# Usage:

## Install
```
npm install -g https://github.com/MichaelKreusel/findAndCd.git
```

## Add to your .bashrc
```
p () {
        target=$(find-and-cd $1 ${2-"$HOME/somefolder"});
        if [[ ! -z $target ]]; then
                cd $target;
        fi;
        unset target
}
```

## Use
```
$ p myProjectFolder

```
