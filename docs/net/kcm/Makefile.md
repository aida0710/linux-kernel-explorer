---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `net/kcm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_AF_KCM) += kcm.o

kcm-y := kcmsock.o kcmproc.o

```
