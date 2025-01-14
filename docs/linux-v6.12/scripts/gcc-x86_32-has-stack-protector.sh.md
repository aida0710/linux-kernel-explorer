---
sidebar_position: 43
---
# gcc-x86_32-has-stack-protector.sh

### ファイル情報

- パス: `linux-v6.12/scripts/gcc-x86_32-has-stack-protector.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

# This requires GCC 8.1 or better.  Specifically, we require
# -mstack-protector-guard-reg, added by
# https://gcc.gnu.org/bugzilla/show_bug.cgi?id=81708

echo "int foo(void) { char X[200]; return 3; }" | $* -S -x c -m32 -O0 -fstack-protector -mstack-protector-guard-reg=fs -mstack-protector-guard-symbol=__stack_chk_guard - -o - 2> /dev/null | grep -q "%fs"

```
