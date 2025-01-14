---
sidebar_position: 4
---
# test_smoke.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tpm2/test_smoke.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: (GPL-2.0 OR BSD-3-Clause)

# Kselftest framework requirement - SKIP code is 4.
ksft_skip=4

[ -e /dev/tpm0 ] || exit $ksft_skip
read tpm_version < /sys/class/tpm/tpm0/tpm_version_major
[ "$tpm_version" == 2 ] || exit $ksft_skip

python3 -m unittest -v tpm2_tests.SmokeTest 2>&1

```
