---
sidebar_position: 44
---
# gcc-x86_64-has-stack-protector.sh

### ファイル情報

- パス: `linux-v6.12/scripts/gcc-x86_64-has-stack-protector.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

echo "int foo(void) { char X[200]; return 3; }" | $* -S -x c -m64 -O0 -mcmodel=kernel -fno-PIE -fstack-protector - -o - 2> /dev/null | grep -q "%gs"

```
