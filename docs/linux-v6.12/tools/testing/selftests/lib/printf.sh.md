---
sidebar_position: 5
---
# printf.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/lib/printf.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Tests the printf infrastructure using test_printf kernel module.
$(dirname $0)/../kselftest/module.sh "printf" test_printf

```
