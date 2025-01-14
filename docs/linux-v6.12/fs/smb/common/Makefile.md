---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/smb/common/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Linux filesystem routines that are shared by client and server.
#

obj-$(CONFIG_SMBFS) += cifs_arc4.o
obj-$(CONFIG_SMBFS) += cifs_md4.o

```
