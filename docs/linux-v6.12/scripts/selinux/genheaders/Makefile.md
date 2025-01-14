---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/scripts/selinux/genheaders/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
hostprogs-always-y += genheaders
HOST_EXTRACFLAGS += \
	-I$(srctree)/include/uapi -I$(srctree)/include \
	-I$(srctree)/security/selinux/include

```
