---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/ocfs2/cluster/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_OCFS2_FS) += ocfs2_nodemanager.o

ocfs2_nodemanager-objs := heartbeat.o masklog.o sys.o nodemanager.o \
	quorum.o tcp.o netdebug.o

```
