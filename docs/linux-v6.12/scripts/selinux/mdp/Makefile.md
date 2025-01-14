---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/scripts/selinux/mdp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
hostprogs-always-y += mdp
HOST_EXTRACFLAGS += \
	-I$(srctree)/include/uapi -I$(srctree)/include \
	-I$(srctree)/security/selinux/include -I$(objtree)/include

clean-files	:= policy.* file_contexts

```
