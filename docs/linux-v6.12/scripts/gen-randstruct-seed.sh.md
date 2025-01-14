---
sidebar_position: 45
---
# gen-randstruct-seed.sh

### ファイル情報

- パス: `linux-v6.12/scripts/gen-randstruct-seed.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

SEED=$(od -A n -t x8 -N 32 /dev/urandom | tr -d ' \n')
echo "$SEED" > "$1"
HASH=$(echo -n "$SEED" | sha256sum | cut -d" " -f1)
echo "#define RANDSTRUCT_HASHED_SEED \"$HASH\"" > "$2"

```
