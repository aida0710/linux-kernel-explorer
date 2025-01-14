---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/security/integrity/evm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for building the Extended Verification Module(EVM)
#
obj-$(CONFIG_EVM) += evm.o

evm-y := evm_main.o evm_crypto.o evm_secfs.o
evm-$(CONFIG_FS_POSIX_ACL) += evm_posix_acl.o

```
