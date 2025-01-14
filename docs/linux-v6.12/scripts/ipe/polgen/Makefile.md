---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/scripts/ipe/polgen/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
hostprogs-always-y	:= polgen
HOST_EXTRACFLAGS += \
	-I$(srctree)/include \
	-I$(srctree)/include/uapi \

```
