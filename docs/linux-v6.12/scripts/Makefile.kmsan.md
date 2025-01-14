---
sidebar_position: 89
---
# Makefile.kmsan

### ファイル情報

- パス: `linux-v6.12/scripts/Makefile.kmsan`

### コンテンツ

```kmsan
# SPDX-License-Identifier: GPL-2.0
kmsan-cflags := -fsanitize=kernel-memory

ifdef CONFIG_KMSAN_CHECK_PARAM_RETVAL
kmsan-cflags += -fsanitize-memory-param-retval
endif

export CFLAGS_KMSAN := $(kmsan-cflags)

```
