---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/virtio_net/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+ OR MIT

TEST_PROGS = basic_features.sh \
        #

TEST_FILES = \
        virtio_net_common.sh \
        #

TEST_INCLUDES = \
        ../../../net/forwarding/lib.sh \
        ../../../net/lib.sh \
        #

include ../../../lib.mk

```
