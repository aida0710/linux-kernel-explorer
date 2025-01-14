---
sidebar_position: 10
---
# kyber-iosched.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/block/kyber-iosched.rst`

### コンテンツ

```rst
============================
Kyber I/O scheduler tunables
============================

The only two tunables for the Kyber scheduler are the target latencies for
reads and synchronous writes. Kyber will throttle requests in order to meet
these target latencies.

read_lat_nsec
-------------
Target latency for reads (in nanoseconds).

write_lat_nsec
--------------
Target latency for synchronous writes (in nanoseconds).

```
