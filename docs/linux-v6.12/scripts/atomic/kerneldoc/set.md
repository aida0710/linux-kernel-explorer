---
sidebar_position: 17
---
# set

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/set`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic set with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 * @i: ${int} value to assign
 *
 * Atomically sets @v to @i with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * Return: Nothing.
 */
EOF

```
