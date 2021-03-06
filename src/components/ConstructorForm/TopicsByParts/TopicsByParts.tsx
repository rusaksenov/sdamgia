import React, {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react'

import { ITopic } from '../Buttons/Buttons'
import { ITestTotal, IParts } from '../ConstructorForm'
import { saveExtraTopics, loadExtraTopics } from './utils'
import { saveParts, saveTopicsList } from '../utils'
import Counter from '../../Counter'
import Subtopic from './Subtopic'
import PartName from './PartName'
import LinkPseudo from 'components/Link/_pseudo'
import LinkWrapU from 'components/Link/_wrap/-U'

interface ITopicsByPartsProps {
  className?: string
  page: string
  topicsList: Array<ITopic> | null
  setTopicsList: Dispatch<SetStateAction<ITopic[] | null>>
  parts: IParts
  setParts: Dispatch<SetStateAction<IParts>>
  testTotal: ITestTotal
  setTestTotal: Dispatch<SetStateAction<ITestTotal>>
}

const TopicsByParts: any = ({
  className,
  page,
  topicsList,
  setTopicsList,
  parts,
  setParts,
  testTotal,
  setTestTotal,
}: ITopicsByPartsProps) => {
  const [extraTopics, setExtraTopics] = useState(false)

  useEffect(() => {
    if (loadExtraTopics()) setExtraTopics(loadExtraTopics())
  }, [])

  const handleTopicClick = useCallback(
    (index: number) => {
      const list = [...topicsList]
      list[index] = { ...list[index], checked: !list[index].checked }

      setTopicsList(list)
      saveTopicsList(page, list)
    },
    [page, topicsList, setTopicsList]
  )

  const handleExtraPartNameClick = useCallback(() => {
    const newValue = !extraTopics

    setExtraTopics(newValue)
    saveExtraTopics(newValue)
  }, [extraTopics])

  const switchOffPart = useCallback(
    (part: string) => {
      const newParts = {
        ...parts,
        [part]: false,
      }
      setParts(newParts)
      saveParts(page, newParts)
    },
    [page, parts, setParts]
  )

  const switchOnPart = useCallback(
    (part: string) => {
      const newParts = {
        ...parts,
        [part]: true,
      }
      setParts(newParts)
      saveParts(page, newParts)
    },
    [page, parts, setParts]
  )

  const topicsListParted =
    topicsList &&
    topicsList.reduce(
      (acc: any, { id, part, title, value, checked, subtopics }: ITopic) => {
        acc[part] = acc[part] || []
        acc[part].push({
          id,
          title,
          value,
          checked,
          subtopics,
        })
        return acc
      },
      {}
    )

  return (
    <div className={className}>
      {topicsListParted &&
        Object.entries(topicsListParted).map(
          ([part, topics]: [string, any], partI: number) => (
            <div className="ConstructorForm-Part" key={partI}>
              <PartName
                part={part}
                handleExtraPartNameClick={handleExtraPartNameClick}
              />

              {(part !== 'extra' || (part === 'extra' && extraTopics)) &&
                topics.map(
                  (
                    { id, title, value, checked, subtopics }: ITopic,
                    i: number
                  ) => (
                    <div
                      className="ConstructorForm-Row"
                      key={'topic' + partI + i}
                    >
                      <Counter
                        className="ConstructorForm-Counter"
                        page={page}
                        name={`prob${id}`}
                        index={id - 1}
                        value={value}
                        list={[...topicsList]}
                        setTopicsList={setTopicsList}
                        testTotal={testTotal}
                        setTestTotal={setTestTotal}
                        part={part}
                        switchOnPart={switchOnPart}
                        switchOffPart={switchOffPart}
                      />
                      <div className="ConstructorForm-Topic">
                        <LinkPseudo
                          className="Link_pseudoBlack ConstructorForm-TopicName"
                          handleClick={() => handleTopicClick(id - 1)}
                          customChildren
                        >
                          <div className="ConstructorForm-TopicNumber">
                            {part !== 'extra' ? id : `Д${i + 1}`}.
                          </div>
                          <div className="ConstructorForm-TopicDesc">
                            <LinkWrapU className="Link_pseudo-U Link_pseudoBlack-U">
                              {title}
                            </LinkWrapU>
                          </div>
                        </LinkPseudo>

                        {checked && (
                          <div className="ConstructorForm-TopicSubs">
                            {subtopics.map((subtopic, subI) => (
                              <Subtopic
                                page={page}
                                i={id - 1}
                                subtopic={subtopic}
                                subI={subI}
                                topicsList={topicsList}
                                setTopicsList={setTopicsList}
                                key={'subtopic' + subtopic.id}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                )}
            </div>
          )
        )}
    </div>
  )
}

export default TopicsByParts
