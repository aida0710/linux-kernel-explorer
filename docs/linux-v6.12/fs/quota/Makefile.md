---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/quota/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_QUOTA)		+= dquot.o
obj-$(CONFIG_QFMT_V1)		+= quota_v1.o
obj-$(CONFIG_QFMT_V2)		+= quota_v2.o
obj-$(CONFIG_QUOTA_TREE)	+= quota_tree.o
obj-$(CONFIG_QUOTACTL)		+= quota.o kqid.o
obj-$(CONFIG_QUOTA_NETLINK_INTERFACE)	+= netlink.o

```
