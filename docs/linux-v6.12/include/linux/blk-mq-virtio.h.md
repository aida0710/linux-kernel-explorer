---
sidebar_position: 98
---
# blk-mq-virtio.h

### ファイル情報

- パス: `linux-v6.12/include/linux/blk-mq-virtio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LINUX_BLK_MQ_VIRTIO_H
#define _LINUX_BLK_MQ_VIRTIO_H

struct blk_mq_queue_map;
struct virtio_device;

void blk_mq_virtio_map_queues(struct blk_mq_queue_map *qmap,
		struct virtio_device *vdev, int first_vec);

#endif /* _LINUX_BLK_MQ_VIRTIO_H */

```
