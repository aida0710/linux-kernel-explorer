---
sidebar_position: 2
---
# checkundef.sh

### ファイル情報

- パス: `linux-v6.12/arch/sparc/vdso/checkundef.sh`

### コンテンツ

```sh
#!/bin/sh
objdump="$1"
file="$2"
$objdump -t "$file" | grep '*UUND*' | grep -v '#scratch' > /dev/null 2>&1
if [ $? -eq 1 ]; then
    exit 0
else
    echo "$file: undefined symbols found" >&2
    exit 1
fi

```
