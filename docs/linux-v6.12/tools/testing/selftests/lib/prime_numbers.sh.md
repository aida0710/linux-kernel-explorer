---
sidebar_position: 4
---
# prime_numbers.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/lib/prime_numbers.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Checks fast/slow prime_number generation for inconsistencies
$(dirname $0)/../kselftest/module.sh "prime numbers" prime_numbers selftest=65536

```
