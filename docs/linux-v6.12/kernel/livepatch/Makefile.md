---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/kernel/livepatch/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_LIVEPATCH) += livepatch.o

livepatch-objs := core.o patch.o shadow.o state.o transition.o

```
