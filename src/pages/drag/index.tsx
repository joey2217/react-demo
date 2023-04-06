import React, { memo, useCallback, useMemo, useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd'

/**
 * !!去掉 React.StrictMode!!
 */

export type Status = 'todo' | 'inProgress' | 'done'

export interface ItemType {
  title: string
  id: string
  num: number
  status: Status
}

const DROP_TYPE = 'drop_type'

const STATUS_LIST: Status[] = ['todo', 'inProgress', 'done']

const getItems = (length = 10, status: Status = 'todo') =>
  Array.from({ length }).map((_item, index) => ({
    id: status + index,
    title: `title` + index,
    content: 'content' + index,
    num: index,
    status,
  }))

const data = getItems(5, 'todo')
  .concat(getItems(3, 'inProgress'))
  .concat(getItems(4, 'done'))

const Darg: React.FC = () => {
  const [list, setList] = useState<ItemType[]>(data)

  const ItemTypeMap = useMemo(() => {
    const todo = list.filter((p) => p.status === 'todo')
    const inProgress = list.filter((p) => p.status === 'inProgress')
    const done = list.filter((p) => p.status === 'done')
    const map: { [prop in Status]: ItemType[] } = {
      todo,
      inProgress,
      done,
    }
    return map
  }, [list])

  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      const { source, destination } = result
      console.log(source, destination, 'onDragEnd')
      if (destination) {
        const { index: sourceIndex, droppableId: sourceStatus } = source
        const { index: destinationIndex, droppableId: destinationStatus } =
          destination
        if (sourceStatus === destinationStatus) {
          if (sourceIndex === destinationIndex) {
            return
          }
          let sourceList = ItemTypeMap[sourceStatus as Status]
          const sourceData = sourceList[sourceIndex]
          const destinationData = sourceList[destinationIndex]
          if (sourceIndex < destinationIndex) {
            sourceList = sourceList
              .slice(0, sourceIndex)
              .concat({ ...destinationData, num: sourceIndex })
              .concat(sourceList.slice(sourceIndex + 1, destinationIndex))
              .concat({ ...sourceData, num: destinationIndex })
              .concat(sourceList.slice(destinationIndex + 1))
          } else {
            sourceList = sourceList
              .slice(0, destinationIndex)
              .concat({ ...sourceData, num: destinationIndex })
              .concat(sourceList.slice(destinationIndex + 1, sourceIndex))
              .concat({ ...destinationData, num: sourceIndex })
              .concat(sourceList.slice(sourceIndex + 1))
          }

          const otherStatus = STATUS_LIST.filter((s) => s !== sourceStatus)
          let otherList: ItemType[] = []
          otherStatus.forEach((s) => {
            otherList = otherList.concat(ItemTypeMap[s])
          })
          setList([...sourceList, ...otherList])
        } else {
          let sourceList = ItemTypeMap[sourceStatus as Status]
          const sourceData = sourceList[sourceIndex]
          sourceList = sourceList
            .slice(0, sourceIndex)
            .concat(
              sourceList
                .slice(sourceIndex + 1)
                .map((item) => ({ ...item, num: item.num - 1 }))
            )
          let destinationList = ItemTypeMap[destinationStatus as Status]
          destinationList = destinationList
            .slice(0, destinationIndex)
            .concat({
              ...sourceData,
              status: destinationStatus as Status,
              num: destinationIndex,
            })
            .concat(
              destinationList
                .slice(destinationIndex)
                .map((item) => ({ ...item, num: item.num + 1 }))
            )
          const otherStatus = STATUS_LIST.filter(
            (s) => s !== sourceStatus && s !== destinationStatus
          )
          let otherList: ItemType[] = []
          otherStatus.forEach((s) => {
            otherList = otherList.concat(ItemTypeMap[s])
          })
          setList([...sourceList, ...destinationList, ...otherList])
        }
      }
    },
    [ItemTypeMap]
  )

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-12 gap-2 border border-indigo-500/50 p-4">
          {Array.from(Object.entries(ItemTypeMap)).map(([status, list]) => (
            <div className="col-span-4" key={status} title={status}>
              <h3>{status}</h3>
              <Droppable key={status} droppableId={status} type={DROP_TYPE}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver ? 'grey' : '',
                    }}
                    {...provided.droppableProps}
                    className="droppable-container p-2 border border-indigo-500/100"
                  >
                    {list.map((content) => (
                      <Draggable
                        key={content.id}
                        draggableId={'draggable-' + content.id}
                        index={content.num}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="draggable-container my-2 p-1 rounded bg-teal-400/50"
                          >
                            <div>
                              {content.title} X {content.num}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

export default memo(Darg)
