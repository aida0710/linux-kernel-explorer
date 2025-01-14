---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/security/yama/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SECURITY_YAMA) := yama.o

yama-y := yama_lsm.o

```
