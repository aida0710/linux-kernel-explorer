---
sidebar_position: 1409
---
# virtio_caif.h

### ファイル情報

- パス: `linux-v6.12/include/linux/virtio_caif.h`

### コンテンツ

```h
/*
 * Copyright (C) ST-Ericsson AB 2012
 * Author: Sjur Brændeland <sjur.brandeland@stericsson.com>
 *
 * This header is BSD licensed so
 * anyone can use the definitions to implement compatible remote processors
 */

#ifndef VIRTIO_CAIF_H
#define VIRTIO_CAIF_H

#include <linux/types.h>
struct virtio_caif_transf_config {
	__virtio16 headroom;
	__virtio16 tailroom;
	__virtio32 mtu;
	u8 reserved[4];
};

struct virtio_caif_config {
	struct virtio_caif_transf_config uplink, downlink;
	u8 reserved[8];
};
#endif

```
