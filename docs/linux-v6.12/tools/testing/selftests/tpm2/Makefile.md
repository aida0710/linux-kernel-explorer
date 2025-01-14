---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tpm2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: (GPL-2.0 OR BSD-3-Clause)
include ../lib.mk

TEST_PROGS := test_smoke.sh test_space.sh test_async.sh
TEST_PROGS_EXTENDED := tpm2.py tpm2_tests.py

```
