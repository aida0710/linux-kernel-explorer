---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/mount/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for mount selftests.
CFLAGS = -Wall \
         -O2

TEST_PROGS := run_unprivileged_remount.sh run_nosymfollow.sh
TEST_GEN_FILES := unprivileged-remount-test nosymfollow-test

include ../lib.mk

```
