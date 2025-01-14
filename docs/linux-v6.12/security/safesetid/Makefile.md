---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/security/safesetid/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the safesetid LSM.
#

obj-$(CONFIG_SECURITY_SAFESETID) := safesetid.o
safesetid-y := lsm.o securityfs.o

```
