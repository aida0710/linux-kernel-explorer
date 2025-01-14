---
sidebar_position: 86
---
# test_override_return.sh

### ファイル情報

- パス: `linux-v6.12/samples/bpf/test_override_return.sh`

### コンテンツ

```sh
#!/bin/bash

rm -r tmpmnt
rm -f testfile.img
dd if=/dev/zero of=testfile.img bs=1M seek=1000 count=1
DEVICE=$(losetup --show -f testfile.img)
mkfs.btrfs -f $DEVICE
mkdir tmpmnt
./tracex7 $DEVICE
if [ $? -eq 0 ]
then
	echo "SUCCESS!"
else
	echo "FAILED!"
fi
losetup -d $DEVICE

```
