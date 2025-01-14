---
sidebar_position: 2
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/iio/Build`

### コンテンツ

```txt
iio_utils-y += iio_utils.o
lsiio-y += lsiio.o iio_utils.o
iio_event_monitor-y += iio_event_monitor.o iio_utils.o
iio_generic_buffer-y += iio_generic_buffer.o iio_utils.o

```
