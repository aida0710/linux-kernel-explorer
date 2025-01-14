---
sidebar_position: 3
---
# test_async.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tpm2/test_async.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: (GPL-2.0 OR BSD-3-Clause)

# Kselftest framework requirement - SKIP code is 4.
ksft_skip=4

[ -e /dev/tpm0 ] || exit $ksft_skip
[ -e /dev/tpmrm0 ] || exit $ksft_skip

python3 -m unittest -v tpm2_tests.AsyncTest 2>&1

```
