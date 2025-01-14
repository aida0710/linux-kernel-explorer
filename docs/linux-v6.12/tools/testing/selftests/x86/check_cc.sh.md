---
sidebar_position: 3
---
# check_cc.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/x86/check_cc.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0-only
# check_cc.sh - Helper to test userspace compilation support
# Copyright (c) 2015 Andrew Lutomirski

CC="$1"
TESTPROG="$2"
shift 2

if [ -n "$CC" ] && $CC -o /dev/null "$TESTPROG" -O0 "$@" 2>/dev/null; then
    echo 1
else
    echo 0
fi

exit 0

```
