---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/firmware/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Makefile for firmware loading selftests
CFLAGS = -Wall \
         -O2

TEST_PROGS := fw_run_tests.sh
TEST_FILES := fw_fallback.sh fw_filesystem.sh fw_upload.sh fw_lib.sh
TEST_GEN_FILES := fw_namespace

include ../lib.mk

```
