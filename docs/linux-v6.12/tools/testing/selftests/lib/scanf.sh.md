---
sidebar_position: 6
---
# scanf.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/lib/scanf.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Tests the scanf infrastructure using test_scanf kernel module.
$(dirname $0)/../kselftest/module.sh "scanf" test_scanf

```
