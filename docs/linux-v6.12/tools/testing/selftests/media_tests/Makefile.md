---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/media_tests/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
CFLAGS += -I../ $(KHDR_INCLUDES)
TEST_GEN_PROGS := media_device_test media_device_open video_device_test

include ../lib.mk

```
