---
sidebar_position: 2
---
# checkundef.sh

### ファイル情報

- パス: `linux-v6.12/arch/x86/entry/vdso/checkundef.sh`

### コンテンツ

```sh
#!/bin/sh
nm="$1"
file="$2"
$nm "$file" | grep '^ *U' > /dev/null 2>&1
if [ $? -eq 1 ]; then
    exit 0
else
    echo "$file: undefined symbols found" >&2
    exit 1
fi

```
